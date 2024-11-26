package com.techeerlog.framework.dto;

import com.techeerlog.framework.enums.FrameworkTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FrameworkRequest {
    private String name;
    private FrameworkTypeEnum frameworkTypeEnum;
}
