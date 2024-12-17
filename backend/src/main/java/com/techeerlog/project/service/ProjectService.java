package com.techeerlog.project.service;

import com.techeerlog.auth.dto.AuthInfo;
import com.techeerlog.project.dto.request.PrizeProjectListRequest;
import com.techeerlog.project.dto.request.ProjectListRequest;
import com.techeerlog.project.dto.request.ProjectRequest;
import com.techeerlog.project.dto.response.ProjectItemListResponse;
import com.techeerlog.project.dto.response.ProjectResponse;

public interface ProjectService {
    ProjectResponse findProjectResponse(Long projectId, AuthInfo authInfo);

    Long addProject(ProjectRequest projectRequest, AuthInfo authInfo);

    ProjectResponse updateProject(Long id, ProjectRequest projectRequest, AuthInfo authInfo);

    void deleteProject(Long id, AuthInfo authInfo);

    ProjectItemListResponse findProjectListResponse(ProjectListRequest projectListRequest, AuthInfo authInfo);

    ProjectItemListResponse findPrizeProjectListResponse(PrizeProjectListRequest prizeProjectListRequest,
                                                         AuthInfo authInfo);

    ProjectItemListResponse findSortedProjectListResponse(ProjectListRequest projectListRequest,
                                                          AuthInfo authInfo);
}
