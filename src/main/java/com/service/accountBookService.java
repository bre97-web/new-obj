package com.service;
import java.util.List;

import com.bean.accountBook;

public interface accountBookService {
    public List<accountBook> getall() ;

    public List<accountBook> getUserAll(int uId);

    boolean pushOne(accountBook accountBook);
}
