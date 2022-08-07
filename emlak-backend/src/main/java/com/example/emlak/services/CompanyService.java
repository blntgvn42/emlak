package com.example.emlak.services;

import com.example.emlak.dto.CompanyDTO;
import com.example.emlak.dto.CompanyLoginDTO;
import com.example.emlak.entities.Company;

import java.util.List;

public interface CompanyService {
    Long getCompany(CompanyLoginDTO companyLoginDTO);
    List<CompanyDTO> getAllCompanies();
    Company createCompany(Company company);
    Company updateCompany(Long companyId, Company company);
    Boolean deleteCompany(Long companyId);
}
