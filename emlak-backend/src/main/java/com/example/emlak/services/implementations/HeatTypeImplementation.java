package com.example.emlak.services.implementations;

import com.example.emlak.entities.HeatType;
import com.example.emlak.repositories.HeatTypeRepository;
import com.example.emlak.services.HeatTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HeatTypeImplementation implements HeatTypeService {
    private final HeatTypeRepository heatTypeRepository;
    @Override
    public List<HeatType> getAllHeatTypes() {
        return this.heatTypeRepository.findAll();
    }

    @Override
    public HeatType createHeatType(HeatType heatType) {
        return this.heatTypeRepository.save(heatType);
    }

    @Override
    public HeatType updateHeatType(Long heatTypeId, HeatType heatType) {
        Optional<HeatType> heatTypeDB = this.heatTypeRepository.findById(heatTypeId);
        if (heatTypeDB.isPresent()) {
            heatTypeDB.get().setType(heatType.getType());
            return this.heatTypeRepository.save(heatTypeDB.get());
        }
        return null;
    }

    @Override
    public Boolean deleteHeatType(Long heatTypeId) {
        if (this.heatTypeRepository.findById(heatTypeId).isPresent()) {
            this.heatTypeRepository.deleteById(heatTypeId);
            return true;
        }
        return false;
    }
}
