package com.speed320.racing_club.service.impl

import org.apache.poi.xssf.usermodel.XSSFWorkbook
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.io.ByteArrayOutputStream
import kotlin.reflect.KClass
import kotlin.reflect.full.memberProperties

@Service
class ExcelExportService {

    fun <T : Any> export(
        fileName: String,
        clazz: KClass<T>,
        items: List<T>
    ): ResponseEntity<ByteArray> {
        val workbook = XSSFWorkbook()
        val sheet = workbook.createSheet(fileName)

        val props = clazz.memberProperties.toList()

        val header = sheet.createRow(0)
        props.forEachIndexed { i, p ->
            header.createCell(i).setCellValue(p.name)
        }

        items.forEachIndexed { rowIdx, item ->
            val row = sheet.createRow(rowIdx + 1)
            props.forEachIndexed { colIdx, p ->
                val v = p.get(item)?.toString() ?: ""
                row.createCell(colIdx).setCellValue(v)
            }
        }

        val out = ByteArrayOutputStream().also {
            workbook.write(it)
            workbook.close()
        }

        val headers = HttpHeaders().apply {
            contentType = MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            )
            set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"$fileName.xlsx\"")
        }

        return ResponseEntity.ok()
            .headers(headers)
            .body(out.toByteArray())
    }
}
