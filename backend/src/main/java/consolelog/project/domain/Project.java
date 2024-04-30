package consolelog.project.domain;

import consolelog.comment.domain.Comment;
import consolelog.global.config.BaseEntity;
import consolelog.love.domain.Love;
import consolelog.member.domain.Member;
import consolelog.project.enums.PlatformEnum;
import consolelog.project.enums.ProjectStatusEnum;
import consolelog.project.enums.ProjectTypeEnum;
import consolelog.project.enums.SemesterEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(value = {AuditingEntityListener.class})
public class Project extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private Long id;

    private String mainImageUrl;

    @Column(nullable = false)
    private String title;

    private String subtitle;

    @Lob
    @Column(nullable = false)
    private String content;

    private LocalDate startDate;
    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    private PlatformEnum platform;

    @Enumerated(EnumType.STRING)
    private ProjectTypeEnum projectType;

    private int year;

    @Enumerated(EnumType.STRING)
    private SemesterEnum semester;

    @Enumerated(EnumType.STRING)
    private ProjectStatusEnum projectStatus;
    private String githubLink;
    private String blogLink;
    private String websiteLink;
    private int viewCount = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @OneToMany(mappedBy = "project")
    private List<Comment> commentList = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<Love> loveList = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<ProjectMember> projectMemberList = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<NonRegisterProjectMember> nonRegisterProjectMemberList = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<ProjectFramework> projectFrameworkList = new ArrayList<>();

    public boolean isOwner(Long accessMemberId) {
        if (accessMemberId == null) {
            return false;
        }
        return member.getId().equals(accessMemberId);
    }
}