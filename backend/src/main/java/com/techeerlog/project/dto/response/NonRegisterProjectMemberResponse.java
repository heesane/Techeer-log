package com.techeerlog.project.dto.response;

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
public class NonRegisterProjectMemberResponse {
    private String name;
    private ProjectMemberTypeEnum projectMemberTypeEnum;
}
