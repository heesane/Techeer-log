package com.techeerlog.project.controller;

import com.techeerlog.auth.dto.AuthInfo;
import com.techeerlog.global.response.ResultResponse;
import com.techeerlog.global.support.token.Login;
import com.techeerlog.project.dto.*;
import com.techeerlog.project.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Arrays;
import java.util.List;

import static com.techeerlog.global.response.ResultCode.*;


@Tag(name = "Project", description = "Project API Document")
@RestController
@RequestMapping("/v1")
@Log4j2
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @Operation(summary = "프로젝트 조회", description = "프로젝트 조회")
    @GetMapping("/projects/{projectId}")
    public ResponseEntity<ResultResponse<ProjectResponse>> findProject(@PathVariable("projectId") Long projectId,
                                                                       @Login AuthInfo authInfo) {

        return ResponseEntity.status(FIND_PROJECT_SUCCESS.getStatus())
                .body(new ResultResponse<>(
                        FIND_PROJECT_SUCCESS,
                        projectService.findProjectResponse(projectId, authInfo)));
    }

    @Operation(summary = "프로젝트 생성", description = "날짜 입력은 2000.10.04 의 형태로 변형해서 입력 해주어야 한다!!  ")
    @PostMapping("/projects")
    public ResponseEntity<ResultResponse<URI>> addPost(@Valid @RequestBody ProjectRequest projectRequest,
                                                       @Login AuthInfo authInfo) {

        return ResponseEntity.status(ADD_PROJECT_SUCCESS.getStatus())
                .body(new ResultResponse<>(
                        ADD_PROJECT_SUCCESS,
                        URI.create("/posts/" + projectService.addProject(projectRequest, authInfo))));
    }

    @Operation(summary = "프로젝트 수정", description = "프로젝트 수정")
    @PutMapping("/projects/{projectId}")
    public ResponseEntity<ResultResponse<ProjectResponse>> updatePost(@PathVariable("projectId") Long projectId,
                                                                      @RequestBody ProjectRequest projectRequest,
                                                                      @Login AuthInfo authInfo) {

        return ResponseEntity.status(UPDATE_PROJECT_SUCCESS.getStatus())
                .body(new ResultResponse<>(
                        UPDATE_PROJECT_SUCCESS,
                        projectService.updateProject(projectId, projectRequest, authInfo)));
    }

    @Operation(summary = "프로젝트 삭제", description = "프로젝트 삭제")
    @DeleteMapping("/projects/{projectId}")
    public ResponseEntity<ResultResponse<String>> deletePost(@PathVariable("projectId") Long projectId,
                                                             @Login AuthInfo authInfo) {
        projectService.deleteProject(projectId, authInfo);

        return ResponseEntity.status(DELETE_SUCCESS.getStatus())
                .body(new ResultResponse<>(DELETE_SUCCESS));
    }

    @Operation(summary = "프로젝트 리스트 조회", description = "프로젝트 리스트 조회")
    @GetMapping(path = "/projects/list")
    public ResponseEntity<ResultResponse<ProjectItemListResponse>> findProjectList(
                                @Valid ProjectListRequest projectListRequest, @Login AuthInfo authInfo) {

        return ResponseEntity.status(FIND_PROJECT_LIST_SUCCESS.getStatus())
                .body(new ResultResponse<>(
                        FIND_PROJECT_LIST_SUCCESS,
                        projectService.findProjectListResponse(projectListRequest, authInfo)));
    }

    @Operation(summary = "우수작 프로젝트 리스트 조회", description = "우수작 프로젝트 리스트 조회")
    @GetMapping(path = "/projects/prize")
    public ResponseEntity<ResultResponse<ProjectItemListResponse>> findPrizeProjectList(
                                @Valid PrizeProjectListRequest prizeProjectListRequest, @Login AuthInfo authInfo) {

        return ResponseEntity.status(FIND_PROJECT_LIST_SUCCESS.getStatus())
                .body(new ResultResponse<>(
                        FIND_PROJECT_LIST_SUCCESS,
                        projectService.findPrizeProjectListResponse(prizeProjectListRequest, authInfo)));
    }

    @Operation(summary = "부트캠프 심사위원용", description = "부트캠프 심사위원")
    @GetMapping("/projects/bootcamp")
    public ResponseEntity<ResultResponse<ProjectItemListResponse>> findSortedProjectList(
                                @Valid ProjectListRequest projectListRequest, @Login AuthInfo authInfo) {

        return ResponseEntity.status(FIND_PROJECT_TEAM_NAME_LIST_SUCCESS.getStatus())
                .body(new ResultResponse<>(
                        FIND_PROJECT_TEAM_NAME_LIST_SUCCESS,
                        projectService.findSortedProjectListResponse(projectListRequest, authInfo)));
    }

}