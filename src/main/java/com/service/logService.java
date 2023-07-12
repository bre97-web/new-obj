package com.service;

import com.pojo.User;
import org.springframework.stereotype.Service;
@Service
public interface logService {
    boolean login(User user);
}
