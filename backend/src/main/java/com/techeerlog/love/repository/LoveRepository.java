package com.techeerlog.love.repository;

import com.techeerlog.love.domain.Love;
import com.techeerlog.project.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface LoveRepository extends JpaRepository<Love, Long> {

    Optional<Love> findByMemberIdAndProjectId(Long memberId, Long projectId);
    void deleteAllByProject(Project project);

    boolean existsByMemberIdAndProjectId(Long memberId, Long projectId);

}
