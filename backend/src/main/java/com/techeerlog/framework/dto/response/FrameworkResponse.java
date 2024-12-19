package com.techeerlog.framework.dto.response;

import com.techeerlog.framework.enums.FrameworkTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FrameworkResponse {
    private String name;
    private FrameworkTypeEnum frameworkTypeEnum;
}
