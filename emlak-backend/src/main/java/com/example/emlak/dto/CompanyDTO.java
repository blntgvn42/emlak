package com.example.emlak.dto;

import lombok.Data;


@Data
public class CompanyDTO {
    private Long id;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String website;
}
