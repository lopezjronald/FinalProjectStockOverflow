package com.skilldistillery.stockoverflow.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "comment_rating")
@Data
public class CommentRating {

    @EmbeddedId
    private CommentRatingId id;

    //mapping to Comment Rating
//    @JsonIgnoreProperties({"posts"})
    @ManyToOne
    @JoinColumn(name = "user_id")
    @MapsId(value = "userId")
    private User user;

    //    @JsonIgnoreProperties({"commentRatings"})
    @ManyToOne
    @JoinColumn(name = "comment_id")
    @MapsId(value = "commentId")
    private Comment comment;

    //fields
    @Column(name = "rating")
    private int rating;

    @Column(name = "note")
    private String note;

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

}
	
