package com.skilldistillery.stockoverflow.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@Data
public class UserStockId {

    private static final long serialVersionUID = 1L;

    @Column(name="user_id")
    private int userId;

    @Column(name="stock_symbol")
    private String stockSymbol;

}
