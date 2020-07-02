package com.skilldistillery.stockoverflow.dao;


import com.skilldistillery.stockoverflow.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface PostRepository extends JpaRepository<Post, Integer> {

    Page<Post> findByUserId(@RequestParam("id") Integer id, Pageable pageable);

    Page<Post> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);

    Page<Post> findByDescriptionContaining(@RequestParam("description") String description, Pageable pageable);

    Page<Post> deletePostById(@RequestParam("id") Integer id, Pageable pageable);

}
