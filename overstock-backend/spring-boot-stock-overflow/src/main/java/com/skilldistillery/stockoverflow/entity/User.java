package com.skilldistillery.stockoverflow.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="user")
@Data
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

//	@JsonIgnore
	@OneToMany(mappedBy = "userCreator")
	private Set <Webinar> webinarsUserIsHosting;

//	@JsonIgnore
	@ManyToMany(mappedBy="usersAttending")
	private Set <Webinar> webinarsAttending;

//	@JsonIgnore
	@OneToMany(mappedBy="user")
	private Set <Comment> comments;

//	@JsonIgnore
//	@JsonIgnoreProperties({"user"})
	@OneToMany(mappedBy="user")
	private Set <Post> posts;

//	@JsonIgnore
	@OneToMany(mappedBy="user")
	private Set <CommentRating> commentRatings;

//	@JsonIgnore
	@OneToMany(mappedBy="user")
	private Set <WebinarRating> webinarRatings;

//	@JsonIgnore
	@OneToMany(mappedBy="user")
	private Set <UserStockJournal> journalEntries;

//	@JsonIgnore
	@ManyToMany(mappedBy="users")
	private Set <Stock> stocks;

	@OneToMany(mappedBy = "user")
	private Set<Resource> resources;

	@Column(name="username")
	private String username;

	@Column(name="password")
	private String password;

	@Column(name="flair")
	private String flair;

	@Column(name="first_name")
	private String firstName;

	@Column(name="last_name")
	private String lastName;

	@Column(name="email")
	private String email;

	@Column(name="role")
	@Enumerated(EnumType.STRING)
	private Role role;

	@Column(name="profile_picture")
	private String profilePicture;

	@Column(name="create_date")
	@CreationTimestamp
	private LocalDateTime createDate;

	@Column(name="enabled")
	private Boolean enabled;

}
