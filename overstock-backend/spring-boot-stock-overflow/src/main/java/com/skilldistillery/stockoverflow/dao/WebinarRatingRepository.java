package com.skilldistillery.stockoverflow.dao;

import com.skilldistillery.stockoverflow.entity.WebinarRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "webinarRatings", path = "webinar-ratings")
public interface WebinarRatingRepository extends JpaRepository<WebinarRating, Integer> {
}
