package com.techeerlog.project.dto.request;

import com.techeerlog.project.enums.ProjectMemberTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectMemberRequest {
    private Long memberId;
    private ProjectMemberTypeEnum projectMemberTypeEnum;
}
