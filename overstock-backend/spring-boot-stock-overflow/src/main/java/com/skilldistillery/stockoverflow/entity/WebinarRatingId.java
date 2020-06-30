package com.skilldistillery.stockoverflow.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class WebinarRatingId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "webinar_id")
	private int webinarId;

	@Column(name = "user_id")
	private int userId;

}
