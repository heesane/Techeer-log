package com.techeerlog.framework.domain;

import com.techeerlog.framework.enums.FrameworkTypeEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class Framework {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "framework_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    private FrameworkTypeEnum frameworkTypeEnum;

}
