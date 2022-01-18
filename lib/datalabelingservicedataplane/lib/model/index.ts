/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as Annotation from "./annotation";
export import Annotation = Annotation.Annotation;
import * as AnnotationAggregationDimensions from "./annotation-aggregation-dimensions";
export import AnnotationAggregationDimensions = AnnotationAggregationDimensions.AnnotationAggregationDimensions;
import * as AnnotationAnalyticsAggregation from "./annotation-analytics-aggregation";
export import AnnotationAnalyticsAggregation = AnnotationAnalyticsAggregation.AnnotationAnalyticsAggregation;
import * as AnnotationAnalyticsAggregationCollection from "./annotation-analytics-aggregation-collection";
export import AnnotationAnalyticsAggregationCollection = AnnotationAnalyticsAggregationCollection.AnnotationAnalyticsAggregationCollection;
import * as AnnotationCollection from "./annotation-collection";
export import AnnotationCollection = AnnotationCollection.AnnotationCollection;
import * as AnnotationSummary from "./annotation-summary";
export import AnnotationSummary = AnnotationSummary.AnnotationSummary;
import * as BoundingPolygon from "./bounding-polygon";
export import BoundingPolygon = BoundingPolygon.BoundingPolygon;
import * as CreateAnnotationDetails from "./create-annotation-details";
export import CreateAnnotationDetails = CreateAnnotationDetails.CreateAnnotationDetails;
import * as CreateRecordDetails from "./create-record-details";
export import CreateRecordDetails = CreateRecordDetails.CreateRecordDetails;
import * as CreateSourceDetails from "./create-source-details";
export import CreateSourceDetails = CreateSourceDetails.CreateSourceDetails;
import * as Dataset from "./dataset";
export import Dataset = Dataset.Dataset;
import * as DatasetFormatDetails from "./dataset-format-details";
export import DatasetFormatDetails = DatasetFormatDetails.DatasetFormatDetails;
import * as DatasetSourceDetails from "./dataset-source-details";
export import DatasetSourceDetails = DatasetSourceDetails.DatasetSourceDetails;
import * as Entity from "./entity";
export import Entity = Entity.Entity;
import * as InitialRecordGenerationConfiguration from "./initial-record-generation-configuration";
export import InitialRecordGenerationConfiguration = InitialRecordGenerationConfiguration.InitialRecordGenerationConfiguration;
import * as Label from "./label";
export import Label = Label.Label;
import * as LabelName from "./label-name";
export import LabelName = LabelName.LabelName;
import * as LabelSet from "./label-set";
export import LabelSet = LabelSet.LabelSet;
import * as NormalizedVertex from "./normalized-vertex";
export import NormalizedVertex = NormalizedVertex.NormalizedVertex;
import * as Record from "./record";
export import Record = Record.Record;
import * as RecordAggregationDimensions from "./record-aggregation-dimensions";
export import RecordAggregationDimensions = RecordAggregationDimensions.RecordAggregationDimensions;
import * as RecordAnalyticsAggregation from "./record-analytics-aggregation";
export import RecordAnalyticsAggregation = RecordAnalyticsAggregation.RecordAnalyticsAggregation;
import * as RecordAnalyticsAggregationCollection from "./record-analytics-aggregation-collection";
export import RecordAnalyticsAggregationCollection = RecordAnalyticsAggregationCollection.RecordAnalyticsAggregationCollection;
import * as RecordCollection from "./record-collection";
export import RecordCollection = RecordCollection.RecordCollection;
import * as RecordMetadata from "./record-metadata";
export import RecordMetadata = RecordMetadata.RecordMetadata;
import * as RecordSummary from "./record-summary";
export import RecordSummary = RecordSummary.RecordSummary;
import * as SortOrders from "./sort-orders";
export import SortOrders = SortOrders.SortOrders;
import * as SourceDetails from "./source-details";
export import SourceDetails = SourceDetails.SourceDetails;
import * as TextSpan from "./text-span";
export import TextSpan = TextSpan.TextSpan;
import * as UpdateAnnotationDetails from "./update-annotation-details";
export import UpdateAnnotationDetails = UpdateAnnotationDetails.UpdateAnnotationDetails;
import * as UpdateRecordDetails from "./update-record-details";
export import UpdateRecordDetails = UpdateRecordDetails.UpdateRecordDetails;

import * as CreateObjectStorageSourceDetails from "./create-object-storage-source-details";
export import CreateObjectStorageSourceDetails = CreateObjectStorageSourceDetails.CreateObjectStorageSourceDetails;
import * as DocumentDatasetFormatDetails from "./document-dataset-format-details";
export import DocumentDatasetFormatDetails = DocumentDatasetFormatDetails.DocumentDatasetFormatDetails;
import * as DocumentMetadata from "./document-metadata";
export import DocumentMetadata = DocumentMetadata.DocumentMetadata;
import * as GenericEntity from "./generic-entity";
export import GenericEntity = GenericEntity.GenericEntity;
import * as ImageDatasetFormatDetails from "./image-dataset-format-details";
export import ImageDatasetFormatDetails = ImageDatasetFormatDetails.ImageDatasetFormatDetails;
import * as ImageMetadata from "./image-metadata";
export import ImageMetadata = ImageMetadata.ImageMetadata;
import * as ImageObjectSelectionEntity from "./image-object-selection-entity";
export import ImageObjectSelectionEntity = ImageObjectSelectionEntity.ImageObjectSelectionEntity;
import * as ObjectStorageDatasetSourceDetails from "./object-storage-dataset-source-details";
export import ObjectStorageDatasetSourceDetails = ObjectStorageDatasetSourceDetails.ObjectStorageDatasetSourceDetails;
import * as ObjectStorageSourceDetails from "./object-storage-source-details";
export import ObjectStorageSourceDetails = ObjectStorageSourceDetails.ObjectStorageSourceDetails;
import * as TextDatasetFormatDetails from "./text-dataset-format-details";
export import TextDatasetFormatDetails = TextDatasetFormatDetails.TextDatasetFormatDetails;
import * as TextMetadata from "./text-metadata";
export import TextMetadata = TextMetadata.TextMetadata;
import * as TextSelectionEntity from "./text-selection-entity";
export import TextSelectionEntity = TextSelectionEntity.TextSelectionEntity;
