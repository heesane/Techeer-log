package com.techeerlog.global.mapper;

import com.techeerlog.framework.dto.FrameworkResponse;
import com.techeerlog.member.dto.MemberResponse;
import com.techeerlog.project.domain.Project;

import com.techeerlog.project.dto.response.NonRegisterProjectMemberResponse;
import com.techeerlog.project.dto.response.ProjectItemResponse;
import com.techeerlog.project.dto.response.ProjectMemberResponse;
import com.techeerlog.project.dto.request.ProjectRequest;
import com.techeerlog.project.dto.response.ProjectResponse;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;


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

    @Mapping(source = "project.id", target = "id")
    ProjectItemResponse projectToProjectItemResponse(Project project, MemberResponse writer, int loveCount,
                                                     boolean isLoved, boolean isScraped,
                                                     List<FrameworkResponse> frameworkResponseList);
}
