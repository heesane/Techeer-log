package com.techeerlog.project.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectItemListResponse {
    private int nextPage;
    private boolean hasNextPage;
    private List<ProjectItemResponse> projectItemResponseList;
}
