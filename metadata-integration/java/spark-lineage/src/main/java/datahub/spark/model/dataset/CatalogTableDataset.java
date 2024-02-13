package datahub.spark.model.dataset;

import com.linkedin.common.FabricType;
import lombok.ToString;
import org.apache.spark.sql.catalyst.catalog.CatalogTable;

@ToString
public class CatalogTableDataset extends SparkDataset {

  public CatalogTableDataset(
      CatalogTable table, String platformInstance, String platform, FabricType fabricType) {
    this(table.qualifiedName(), platformInstance, platform, fabricType);
  }

  public CatalogTableDataset(
      String dsName, String platformInstance, String platform, FabricType fabricType) {
    super(platform, platformInstance, dsName, fabricType);
  }

  public CatalogTableDataset(
      CatalogTable table,
      String platformInstance,
      String platform,
      FabricType fabricType,
      String hiveCatalogName) {
    this(
        getDatasetName(table.qualifiedName(), hiveCatalogName),
        platformInstance,
        platform,
        fabricType);
  }

  public CatalogTableDataset(
      String dsName,
      String platformInstance,
      String platform,
      FabricType fabricType,
      String hiveCatalogName) {
    super(platform, platformInstance, getDatasetName(dsName, hiveCatalogName), fabricType);
  }

  private static String getDatasetName(String dsName, String hiveCatalogName) {
    String result = dsName.toLowerCase();
    if (hiveCatalogName == null) {
      return result;
    } else {
      String[] parts = result.split("//.");
      if (!parts[0].toLowerCase().contains("spark_catalog")) {
        return result;
      } else {
        parts[0] = parts[0].replace("spark_catalog", hiveCatalogName.toLowerCase());
        return String.join(".", parts);
      }
    }
  }
}
