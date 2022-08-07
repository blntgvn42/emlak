package com.example.emlak.services.implementations;

import com.example.emlak.entities.AdvertisementType;
import com.example.emlak.repositories.AdvertisementTypeRepository;
import com.example.emlak.services.AdvertisementTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdvertisementTypeImplementation implements AdvertisementTypeService {
    private final AdvertisementTypeRepository advertisementTypeRepository;

    @Override
    public List<AdvertisementType> getAllAdvertisementTypes() {
        return this.advertisementTypeRepository.findAll();
    }

    @Override
    public AdvertisementType createAdvertisementType(AdvertisementType advertisementType) {
        return this.advertisementTypeRepository.save(advertisementType);
    }

    @Override
    public AdvertisementType updateAdvertisementType(Long advertisementTypeId, AdvertisementType advertisementType) {
        Optional<AdvertisementType> advertisementTypeDB = this.advertisementTypeRepository.findById(advertisementTypeId);
        if (advertisementTypeDB.isPresent()) {
            advertisementTypeDB.get().setType(advertisementType.getType());
            return this.advertisementTypeRepository.save(advertisementTypeDB.get());
        }
        return null;
    }

    @Override
    public Boolean deleteAdvertisementType(Long advertisementTypeId) {
        if (this.advertisementTypeRepository.findById(advertisementTypeId).isPresent()) {
            this.advertisementTypeRepository.deleteById(advertisementTypeId);
            return true;
        }
        return false;
    }
}
