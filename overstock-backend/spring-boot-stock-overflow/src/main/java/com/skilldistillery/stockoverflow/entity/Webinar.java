package com.skilldistillery.stockoverflow.entity;

import lombok.Data;
import org.graalvm.compiler.lir.CompositeValue;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "webinar")
@Data
public class Webinar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name="creator_user_id")
    private User userCreator;

    @ManyToMany
    @JoinTable(name="user_webinar",
            joinColumns=@JoinColumn(name="webinar_id"),
            inverseJoinColumns=@JoinColumn(name="user_id"))
    private Set <User> usersAttending;

    @OneToMany(mappedBy="webinar")
    private Set <WebinarRating> webinarRatings;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="date_time")
    @DateTimeFormat
    private LocalDateTime dateTime;

    @Column(name="created_at")
    @CreationTimestamp
    private Date createdAt;

    @Column(name="update_date")
    @UpdateTimestamp
    private Date updateDate;

    @Column(name="picture")
    private String picture;

    @Column(name="meeting_link")
    private String meetingLink;

    @Column(name="max_attendees")
    private int maxAttendees;

    @Column(name="enabled")
    private Boolean enabled;

}
