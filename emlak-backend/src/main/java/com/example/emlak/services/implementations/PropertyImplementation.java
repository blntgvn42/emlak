package com.example.emlak.services.implementations;

import com.example.emlak.dto.PropertyDTO;
import com.example.emlak.entities.*;
import com.example.emlak.repositories.*;
import com.example.emlak.services.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PropertyImplementation implements PropertyService {
    private final CompanyRepository companyRepository;
    private final HeatTypeRepository heatTypeRepository;
    private final PropertyRepository propertyRepository;
    private final PropertyTypeRepository propertyTypeRepository;
    private final AdvertisementTypeRepository advertisementTypeRepository;

    @Override
    public List<PropertyDTO> getAllProperties() {
        List<Property> allProperties = this.propertyRepository.findAll();

        return allProperties.stream().map(property -> {
            PropertyDTO propertyDTO = new PropertyDTO();
            propertyDTO.setId(property.getId());
            propertyDTO.setSquareMeter(property.getSquareMeter());
            propertyDTO.setTitle(property.getTitle());
            propertyDTO.setRoomNumber(property.getRoomNumber());
            propertyDTO.setTotalFloor(property.getTotalFloor());
            propertyDTO.setCurrentFloor(property.getCurrentFloor());
            propertyDTO.setAddress(property.getAddress());
            propertyDTO.setPrice(property.getPrice());
            propertyDTO.setAddress(property.getAddress());
            propertyDTO.setDetails(property.getDetails());
            propertyDTO.setIsFurnished(property.getIsFurnished());
            propertyDTO.setCreated_at(property.getCreatedAt());
            propertyDTO.setUpdated_at(property.getUpdatedAt());

            propertyDTO.setCompany_id(property.getCompany().getId());
            propertyDTO.setProperty_type_id(property.getPropertyType().getId());
            propertyDTO.setAdvertisement_type_id(property.getAdvertisementType().getId());
            propertyDTO.setHeat_type_id(property.getHeatType().getId());
            return propertyDTO;
        }).collect(Collectors.toList());
    }

    @Override
    public Property createProperty(Property property, Long companyId, Long advertisementTypeId, Long propertyTypeId, Long heatTypeId) {
        Optional<Company> companyDB = this.companyRepository.findById(companyId);
        Optional<HeatType> heatTypeDB = this.heatTypeRepository.findById(heatTypeId);
        Optional<PropertyType> propertyTypeDB = this.propertyTypeRepository.findById(propertyTypeId);
        Optional<AdvertisementType> advertisementTypeDB = this.advertisementTypeRepository.findById(advertisementTypeId);
        if (companyDB.isPresent() && heatTypeDB.isPresent() && propertyTypeDB.isPresent() && advertisementTypeDB.isPresent()) {
            property.setCompany(companyDB.get());
            property.setHeatType(heatTypeDB.get());
            property.setPropertyType(propertyTypeDB.get());
            property.setAdvertisementType(advertisementTypeDB.get());
            return this.propertyRepository.save(property);
        }
        return null;
    }
}
