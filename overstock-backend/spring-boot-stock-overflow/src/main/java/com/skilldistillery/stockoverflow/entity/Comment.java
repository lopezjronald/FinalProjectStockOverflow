package com.skilldistillery.stockoverflow.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="comment")
@Data
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

//    @JsonIgnore
    @OneToMany(mappedBy="comment")
    private Set<CommentRating> commentRatings;

//    @JsonIgnore
//    @JsonIgnoreProperties({"comments"})
    @ManyToOne
    @JoinColumn(name="post_id")
    private Post post;

    //	@JsonIgnoreProperties({"comments"})
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @Column(name="content")
    private String content;

    @Column(name="create_date")
    @CreationTimestamp
    private LocalDateTime createDate;

    @Column(name="enabled")
    private boolean enabled;

}
