package com.techeerlog.project.dto;

import com.techeerlog.member.dto.MemberResponse;
import com.techeerlog.project.enums.ProjectMemberTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectMemberResponse {
    private MemberResponse memberResponse;
    private ProjectMemberTypeEnum projectMemberTypeEnum;
}
