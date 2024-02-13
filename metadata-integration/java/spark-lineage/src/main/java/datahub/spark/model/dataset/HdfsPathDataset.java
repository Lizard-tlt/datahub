package datahub.spark.model.dataset;

import com.linkedin.common.FabricType;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import lombok.ToString;
import org.apache.hadoop.fs.Path;

@ToString
public class HdfsPathDataset extends SparkDataset {

  private static String getPath(Path path, boolean includeScheme, String removePartitionPattern) {
    URI uri = path.toUri();
    String uriPath = includeScheme ? uri.toString() : uri.getHost() + uri.getPath();
    if (removePartitionPattern != null) {
      if (removePartitionPattern.toLowerCase().equals("true")) {
        return removePartitions(uriPath);
      } else {
        return uriPath.replaceAll(removePartitionPattern, "");
      }
    }
    return uriPath;
  }

  private static String getPlatform(Path path) {
    String scheme = path.toUri().getScheme();
    if (scheme.equals("s3a") || scheme.equals("s3n")) {
      return "s3";
    } else {
      return scheme;
    }
  }

  public HdfsPathDataset(
      Path path,
      String platformInstance,
      boolean includeScheme,
      FabricType fabricType,
      String removePartitionPattern) {
    // TODO check static partitions?
    this(
        getPath(path, includeScheme, removePartitionPattern),
        platformInstance,
        getPlatform(path),
        fabricType);
  }

  public HdfsPathDataset(
      String pathUri, String platformInstance, String platform, FabricType fabricType) {
    // TODO check static partitions?
    super(platform, platformInstance, pathUri, fabricType);
  }

  private static String removePartitions(String path) {
    if (!path.contains("=")) {
      return path;
    }
    String[] pathPieces = path.split("/");
    List<String> pathResult = new ArrayList<String>();

    for (int i = 0; i < pathPieces.length; i++) {
      if (pathPieces[i].contains("=")) {
        break;
      }
      pathResult.add(pathPieces[i]);
    }
    return String.join("/", pathResult);
  }
}
