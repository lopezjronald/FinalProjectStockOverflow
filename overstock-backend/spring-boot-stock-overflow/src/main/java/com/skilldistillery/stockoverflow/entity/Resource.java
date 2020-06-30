package com.skilldistillery.stockoverflow.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="resource")
@Data
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name="type")
    @Enumerated(EnumType.STRING)
    private Type type;

    @Column(name = "content")
    private String content;

    @Column(name = "created_at")
    @CreationTimestamp
    private Date createdAt;

}
