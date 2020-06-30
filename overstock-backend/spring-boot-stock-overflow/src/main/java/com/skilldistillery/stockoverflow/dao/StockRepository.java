package com.skilldistillery.stockoverflow.dao;

import com.skilldistillery.stockoverflow.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface StockRepository extends JpaRepository<Stock, String> {
}
