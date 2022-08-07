package com.example.emlak.services.implementations;

import com.example.emlak.dto.CompanyDTO;
import com.example.emlak.dto.CompanyLoginDTO;
import com.example.emlak.entities.Company;
import com.example.emlak.repositories.CompanyRepository;
import com.example.emlak.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CompanyImplementation implements CompanyService {
    private final CompanyRepository companyRepository;

    @Override
    public Long getCompany(CompanyLoginDTO companyLoginDTO) {
        Optional<Company> company = this.companyRepository.findByEmail(companyLoginDTO.getEmail());
        if (company.isPresent() && Objects.equals(company.get().getPassword(), companyLoginDTO.getPassword())) {
            return company.get().getId();
        }
        return 0L;
    }

    @Override
    public List<CompanyDTO> getAllCompanies() {
        List<Company> allCompany = this.companyRepository.findAll();
        return allCompany.stream().map(company -> {
            CompanyDTO companyDTO = new CompanyDTO();
            companyDTO.setId(company.getId());
            companyDTO.setName(company.getName());
            companyDTO.setAddress(company.getAddress());
            companyDTO.setEmail(company.getEmail());
            companyDTO.setPhone(company.getPhone());
            companyDTO.setWebsite(company.getWebsite());
            return companyDTO;
        }).collect(Collectors.toList());
    }

    @Override
    public Company createCompany(Company company) {
        return this.companyRepository.save(company);
    }

    @Override
    public Company updateCompany(Long companyId, Company company) {
        Optional<Company> companyDB = this.companyRepository.findById(companyId);
        if (companyDB.isPresent()) {
            companyDB.get().setName(company.getName());
            companyDB.get().setAddress(company.getAddress());
            companyDB.get().setPhone(company.getPhone());
            companyDB.get().setEmail(company.getEmail());
            companyDB.get().setPassword(company.getPassword());
            companyDB.get().setWebsite(company.getWebsite());
            return this.companyRepository.save(companyDB.get());
        }
        return null;
    }

    @Override
    public Boolean deleteCompany(Long companyId) {
        if (this.companyRepository.findById(companyId).isPresent()) {
            this.companyRepository.deleteById(companyId);
            return true;
        }
        return false;
    }
}
