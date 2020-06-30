package com.skilldistillery.stockoverflow.dao;

import com.skilldistillery.stockoverflow.entity.UserStockJournal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "userStockJournals", path = "stock-journals")
public interface UserStockJournalRepository extends JpaRepository<UserStockJournal, Integer> {
}
