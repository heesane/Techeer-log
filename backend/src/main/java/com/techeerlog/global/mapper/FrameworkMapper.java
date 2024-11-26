package com.techeerlog.global.mapper;

import com.techeerlog.framework.domain.Framework;
import com.techeerlog.framework.dto.response.FrameworkResponse;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface FrameworkMapper {
    FrameworkResponse frameworkToFrameworkResponse(Framework framework);
}
