package com.skilldistillery.stockoverflow.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class CommentRatingId implements Serializable {
	
	private static final long serialVersionUID =1L;

	@Column(name="comment_id")
	private int commentId;

	@Column(name="user_id")
	private int userId;

}
