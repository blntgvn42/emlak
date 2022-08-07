package com.example.emlak.dto;


import com.example.emlak.entities.Customer;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerLoginDTO {
    String email;
    String password;
}