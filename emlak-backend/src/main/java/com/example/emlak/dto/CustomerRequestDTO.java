package com.example.emlak.dto;


import com.example.emlak.entities.Customer;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerRequestDTO {
    Customer customer;
    Long companyId;
}