package com.techeerlog.project.dto.request;

import com.techeerlog.project.enums.ProjectMemberTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NonRegisterProjectMemberRequest {
    private String name;
    private ProjectMemberTypeEnum projectMemberTypeEnum;
}
