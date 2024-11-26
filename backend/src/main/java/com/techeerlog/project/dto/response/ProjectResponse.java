package com.techeerlog.project.dto.response;

import com.techeerlog.framework.dto.FrameworkResponse;
import com.techeerlog.member.dto.MemberResponse;
import com.techeerlog.project.dto.response.NonRegisterProjectMemberResponse;
import com.techeerlog.project.dto.response.ProjectMemberResponse;
import com.techeerlog.project.enums.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter // deserializer 시 필요함
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResponse {
    private Long id;
    private String mainImageUrl;
    private String title;
    private String subtitle;
    private String content;
    private LocalDate startDate;
    private LocalDate endDate;
    private PlatformEnum platform;
    private ProjectTypeEnum projectTypeEnum;
    private ProjectTeamNameEnum projectTeamNameEnum;
    private int year;
    private SemesterEnum semesterEnum;
    private ProjectStatusEnum projectStatusEnum;
    private String githubLink;
    private String blogLink;
    private String websiteLink;
    private int loveCount = 0;
    private boolean isLoved;
    private boolean isScraped;
    private MemberResponse writer;
    private List<ProjectMemberResponse> projectMemberResponseList;
    private List<NonRegisterProjectMemberResponse> nonRegisterProjectMemberResponseList;
    private List<FrameworkResponse> frameworkResponseList;
}
