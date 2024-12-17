package com.techeerlog.project.dto.request;

import com.techeerlog.project.enums.SearchFieldEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Sort;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectListRequest {
    private int pageStart;
    private int pageSize;
    private String searchKeyword;
    private SearchFieldEnum searchFieldEnum;
    private Sort.Direction sortDirection;
}
