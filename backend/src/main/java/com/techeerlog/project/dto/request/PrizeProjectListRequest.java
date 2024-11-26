package com.techeerlog.project.dto.request;

import com.techeerlog.project.enums.ProjectTypeEnum;
import com.techeerlog.project.enums.SemesterEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PrizeProjectListRequest {
    private ProjectTypeEnum projectTypeEnum;
    private int year;
    private SemesterEnum semesterEnum;
}
