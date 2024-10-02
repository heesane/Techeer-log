package com.techeerlog.project.service;

import com.techeerlog.auth.dto.AuthInfo;
import com.techeerlog.framework.repository.FrameworkRepository;
import com.techeerlog.global.mapper.FrameworkMapper;
import com.techeerlog.global.mapper.MemberMapper;
import com.techeerlog.global.mapper.ProjectMapper;
import com.techeerlog.global.support.UtilMethod;
import com.techeerlog.love.domain.Love;
import com.techeerlog.love.repository.LoveRepository;
import com.techeerlog.member.domain.LoginId;
import com.techeerlog.member.domain.Member;
import com.techeerlog.member.domain.Nickname;
import com.techeerlog.member.domain.Password;
import com.techeerlog.member.repository.MemberRepository;
import com.techeerlog.project.domain.Project;
import com.techeerlog.project.dto.ProjectRequest;
import com.techeerlog.project.dto.ProjectResponse;
import com.techeerlog.project.enums.*;
import com.techeerlog.project.repository.NonRegisterProjectMemberRepository;
import com.techeerlog.project.repository.ProjectFrameworkRepository;
import com.techeerlog.project.repository.ProjectMemberRepository;
import com.techeerlog.project.repository.ProjectRepository;
import com.techeerlog.scrap.domain.Scrap;
import com.techeerlog.scrap.repository.ScrapRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mapstruct.factory.Mappers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.awt.print.PrinterJob;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;

@ExtendWith(MockitoExtension.class)
public class ProjectServiceTest {
    @Mock
    private ProjectRepository projectRepository;
    @Mock
    private UtilMethod utilMethod;
    @Mock
    private ProjectMemberRepository projectMemberRepository;
    @Mock
    private MemberRepository memberRepository;
    @Mock
    private FrameworkRepository frameworkRepository;
    @Mock
    private ProjectFrameworkRepository projectFrameworkRepository;
    @Mock
    private NonRegisterProjectMemberRepository nonRegisterProjectMemberRepository;
    @Mock
    private LoveRepository loveRepository;
    @Mock
    private ScrapRepository scrapRepository;
    @Spy
    private final ProjectMapper projectMapper = Mappers.getMapper(ProjectMapper.class);
    @Spy
    private final MemberMapper memberMapper = Mappers.getMapper(MemberMapper.class);
    @Spy
    private final FrameworkMapper frameworkMapper = Mappers.getMapper(FrameworkMapper.class);
    @InjectMocks
    private ProjectService projectService;

    @Nested
    class FindProjectResponseTest {
        @Test
        @DisplayName("프로젝트 단일 조회 성공")
        void findProjectResponseTestSuccess() {
            // given
            Member member = createMember(1L);
            Project project = createProject(1L, member);
            Love love = createLove(member, project);
            Scrap scrap = createScrap(member, project);

            Mockito.when(projectRepository.findById(any()))
                    .thenReturn(Optional.ofNullable(project));
            Mockito.when(loveRepository.findByMemberIdAndProjectId(any(), any()))
                    .thenReturn(Optional.ofNullable(love));
            Mockito.when(scrapRepository.findByMemberIdAndProjectId(any(), any()))
                    .thenReturn(Optional.ofNullable(scrap));

            // when
            ProjectResponse projectResponse =
                    projectService.findProjectResponse(1L,
                            new AuthInfo(1L, "type", "test"));

            // then
            Assertions.assertEquals(projectResponse.getId(), 1L);
            Assertions.assertEquals(projectResponse.getProjectMemberResponseList().size(), 0);
            Assertions.assertTrue(projectResponse.isLoved());
            Assertions.assertTrue(projectResponse.isScraped());
        }

        private Member createMember(Long memberId) {
            return Member.builder()
                    .id(memberId)
                    .introduction("instruction" + memberId)
                    .loginId(new LoginId("test" + memberId))
                    .nickname(new Nickname("test" + memberId))
                    .password(new Password("1234"))
                    .profileImageUrl("profileImageUrl" + memberId)
                    .build();
        }

        private Project createProject(Long projectId, Member member) {
            return Project.builder()
                    .id(projectId)
                    .title("title" + projectId)
                    .subtitle("subtitle" + projectId)
                    .mainImageUrl("mainImageUrl" + projectId)
                    .content("content" + projectId)
                    .startDate(LocalDate.now())
                    .endDate(LocalDate.now())
                    .blogLink("blogLink" + projectId)
                    .githubLink("githubLink" + projectId)
                    .websiteLink("websiteLink" + projectId)
                    .commentList(Collections.emptyList())
                    .projectFrameworkList(Collections.emptyList())
                    .projectMemberList(Collections.emptyList())
                    .nonRegisterProjectMemberList(Collections.emptyList())
                    .loveList(Collections.emptyList())
                    .projectStatusEnum(ProjectStatusEnum.COMPLETED)
                    .projectTypeEnum(ProjectTypeEnum.BOOTCAMP)
                    .platform(PlatformEnum.WEB)
                    .projectTeamNameEnum(ProjectTeamNameEnum.A)
                    .rankEnum(RankEnum.FIRST)
                    .year(2024)
                    .semesterEnum(SemesterEnum.ALL)
                    .member(member)
                    .build();
        }

        private Love createLove(Member member, Project project) {
            return Love.builder()
                    .project(project)
                    .member(member)
                    .build();
        }

        private Scrap createScrap(Member member, Project project) {
            return Scrap.builder()
                    .project(project)
                    .member(member)
                    .build();
        }
    }

    @Nested
    class AddProjectTest {
        @Test
        @DisplayName("프로젝트 추가 성공")
        void addProjectTestSuccess() {
            // given
            Member member = createMember(1L);
            Project project = createProject(1L, member);

            Mockito.when(projectRepository.save(any())).thenReturn(project);

            ProjectRequest projectRequest = createProjectRequest(1L);

            // when
            Long projectId = projectService.addProject(projectRequest,
                    new AuthInfo(1L, "type", "nickname"));

            // then
            Assertions.assertEquals(1L, projectId);
        }

        private Member createMember(Long memberId) {
            return Member.builder()
                    .id(memberId)
                    .introduction("instruction" + memberId)
                    .loginId(new LoginId("test" + memberId))
                    .nickname(new Nickname("test" + memberId))
                    .password(new Password("1234"))
                    .profileImageUrl("profileImageUrl" + memberId)
                    .build();
        }

        private ProjectRequest createProjectRequest(Long projectId) {
            return ProjectRequest.builder()
                    .title("title" + projectId)
                    .subtitle("subtitle" + projectId)
                    .mainImageUrl("mainImageUrl" + projectId)
                    .content("content" + projectId)
                    .startDate(LocalDate.now())
                    .endDate(LocalDate.now())
                    .blogLink("blogLink" + projectId)
                    .githubLink("githubLink" + projectId)
                    .websiteLink("websiteLink" + projectId)
                    .projectStatusEnum(ProjectStatusEnum.COMPLETED)
                    .projectTypeEnum(ProjectTypeEnum.BOOTCAMP)
                    .platform(PlatformEnum.WEB)
                    .year(2024)
                    .semesterEnum(SemesterEnum.ALL)
                    .projectMemberRequestList(Collections.emptyList())
                    .frameworkRequestList(Collections.emptyList())
                    .nonRegisterProjectMemberRequestList(Collections.emptyList())
                    .build();
        }

        private Project createProject(Long projectId, Member member) {
            return Project.builder()
                    .id(projectId)
                    .title("title" + projectId)
                    .subtitle("subtitle" + projectId)
                    .mainImageUrl("mainImageUrl" + projectId)
                    .content("content" + projectId)
                    .startDate(LocalDate.now())
                    .endDate(LocalDate.now())
                    .blogLink("blogLink" + projectId)
                    .githubLink("githubLink" + projectId)
                    .websiteLink("websiteLink" + projectId)
                    .commentList(Collections.emptyList())
                    .projectFrameworkList(Collections.emptyList())
                    .projectMemberList(Collections.emptyList())
                    .nonRegisterProjectMemberList(Collections.emptyList())
                    .loveList(Collections.emptyList())
                    .projectStatusEnum(ProjectStatusEnum.COMPLETED)
                    .projectTypeEnum(ProjectTypeEnum.BOOTCAMP)
                    .platform(PlatformEnum.WEB)
                    .projectTeamNameEnum(ProjectTeamNameEnum.A)
                    .rankEnum(RankEnum.FIRST)
                    .year(2024)
                    .semesterEnum(SemesterEnum.ALL)
                    .member(member)
                    .build();
        }
    }

}
