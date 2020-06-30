package com.skilldistillery.stockoverflow.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "webinar_rating")
@Data
public class WebinarRating {

    @EmbeddedId
    private WebinarRatingId id;

    @ManyToOne
    @MapsId(value="webinarId")
    @JoinColumn(name="webinar_id")
    private Webinar webinar;

    @ManyToOne
    @MapsId(value="userId")
    @JoinColumn(name="user_id")
    private User user;

    private int rating;

    @Column(name="rating_note")
    private String ratingNote;

    @Column(name="created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

}
