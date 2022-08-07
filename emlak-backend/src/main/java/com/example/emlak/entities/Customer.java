package com.example.emlak.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Data
public class Customer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phone;
    @Email
    @Column(nullable = false, unique = true)
    private String email;
    private String password;
    private Boolean isExecutive;
    @ManyToOne(fetch = FetchType.LAZY)
    private Company company;
}
