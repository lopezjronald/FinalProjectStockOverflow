package com.skilldistillery.stockoverflow.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="user_stock_journal")
@Data
public class UserStockJournal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="stock_symbol")
    private Stock stock;

    @Column(name="content")
    private String content;

    @Column(name="created_at")
    @CreationTimestamp
    private LocalDateTime createdAt;

}
