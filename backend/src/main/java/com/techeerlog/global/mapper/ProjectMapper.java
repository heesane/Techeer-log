package com.techeerlog.global.mapper;

import com.techeerlog.framework.dto.FrameworkResponse;
import com.techeerlog.member.dto.MemberResponse;
import com.techeerlog.project.domain.Project;
import com.techeerlog.project.dto.*;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProjectMapper {

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateProjectFromRequest(ProjectRequest projectRequest, @MappingTarget Project project);

    Project projectRequestToProject(ProjectRequest projectRequest);

    @Mapping(source = "project.id", target = "id")
    ProjectResponse projectToProjectResponse(Project project, MemberResponse writer, int loveCount, boolean isLoved,
                                             boolean isScraped, List<ProjectMemberResponse> projectMemberResponseList,
                                             List<NonRegisterProjectMemberResponse> nonRegisterProjectMemberResponseList,
                                             List<FrameworkResponse> frameworkResponseList);

    ProjectItemResponse projectToProjectItemResponse(Project project);
}
