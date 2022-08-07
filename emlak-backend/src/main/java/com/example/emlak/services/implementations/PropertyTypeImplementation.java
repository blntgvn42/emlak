package com.example.emlak.services.implementations;

import com.example.emlak.entities.PropertyType;
import com.example.emlak.repositories.PropertyTypeRepository;
import com.example.emlak.services.PropertyTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PropertyTypeImplementation implements PropertyTypeService {
    private final PropertyTypeRepository propertyTypeRepository;

    @Override
    public List<PropertyType> getAllPropertyTypes() {
        return this.propertyTypeRepository.findAll();
    }

    @Override
    public PropertyType createPropertyType(PropertyType propertyType) {
        return this.propertyTypeRepository.save(propertyType);
    }

    @Override
    public PropertyType updatePropertyType(Long propertyTypeId, PropertyType propertyType) {
        Optional<PropertyType> propertyTypeDB = this.propertyTypeRepository.findById(propertyTypeId);
        if (propertyTypeDB.isPresent()) {
            propertyTypeDB.get().setType(propertyType.getType());
            return this.propertyTypeRepository.save(propertyTypeDB.get());
        }
        return null;
    }

    @Override
    public Boolean deletePropertyType(Long propertyTypeId) {
        if (this.propertyTypeRepository.findById(propertyTypeId).isPresent()) {
            this.propertyTypeRepository.deleteById(propertyTypeId);
            return true;
        }
        return false;
    }
}
