package com.skilldistillery.stockoverflow.entity;

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

    @ManyToOne
    @JoinColumn(name = "user_id")
    @MapsId(value = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "comment_id")
    @MapsId(value = "commentId")
    private Comment comment;

    @Column(name = "rating")
    private int rating;

    @Column(name = "note")
    private String note;

    @Column(name = "created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

}
	
