package com.techeerlog.project.domain;

import com.techeerlog.project.dto.request.NonRegisterProjectMemberRequest;
import com.techeerlog.project.dto.response.NonRegisterProjectMemberResponse;
import com.techeerlog.project.enums.ProjectMemberTypeEnum;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class NonRegisterProjectMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "non_register_project_member_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @Enumerated(EnumType.STRING)
    private ProjectMemberTypeEnum projectMemberType;

    private String name;

    public NonRegisterProjectMember(Project project, NonRegisterProjectMemberRequest nonRegisterProjectMemberRequest) {
        this.project = project;
        this.projectMemberType = nonRegisterProjectMemberRequest.getProjectMemberTypeEnum();
        this.name = nonRegisterProjectMemberRequest.getName();
    }

    public NonRegisterProjectMemberResponse getResponse() {
        return new NonRegisterProjectMemberResponse(this.name, this.projectMemberType);
    }
}
