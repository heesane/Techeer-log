package consolelog.project.repository;

import consolelog.project.domain.Project;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE project SET view_count = view_count + 1 WHERE project_id = :projectId", nativeQuery = true)
    void updateViewCount(@Param("projectId") Long projectId);

     Slice<Project> findAllByTitle(String title, Pageable pageable);
}
