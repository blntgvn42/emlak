package com.example.emlak.repositories;

import com.example.emlak.entities.AdvertisementType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvertisementTypeRepository extends JpaRepository<AdvertisementType, Long> {
}
