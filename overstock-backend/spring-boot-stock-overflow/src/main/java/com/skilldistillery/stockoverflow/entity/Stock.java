package com.skilldistillery.stockoverflow.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="stock")
@Data
public class Stock {

    @Id
    @Column(name="symbol")
    private String symbol;

    @Column(name="company_name")
    private String companyName;

    @Column(name="exchange")
    private String exchange;

    @ManyToMany
    @JoinTable(name="user_stock",
            joinColumns=@JoinColumn(name="stock_symbol"),
            inverseJoinColumns=@JoinColumn(name="user_id"))
    private Set<User> users;

}
